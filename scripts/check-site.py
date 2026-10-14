"""Build-time checks for published links, metadata and enquiry safety."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit
import json

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ['index.html', 'privacy.html', 'thanks.html', '404.html', 'robots.txt', 'sitemap.xml', 'CNAME', '.nojekyll', 'favicon.svg', 'site.js', 'styles.css', 'demo.js', 'workflow-model.mjs', 'form.js', 'enquire.html']
PUBLIC += sorted(str(p.relative_to(ROOT)) for p in (ROOT/'assets').rglob('*') if p.is_file())
class Page(HTMLParser):
    def __init__(self):
        super().__init__(); self.nodes=[]; self.ids=[]; self.jsonld=[]; self.in_json=False
    def handle_starttag(self, tag, attrs):
        a=dict(attrs); self.nodes.append((tag,a))
        if 'id' in a: self.ids.append(a['id'])
        self.in_json = tag=='script' and a.get('type')=='application/ld+json'
    def handle_data(self, data):
        if self.in_json: self.jsonld.append(json.loads(data))
    def handle_endtag(self, tag):
        if tag=='script': self.in_json=False

pages={}
for name in PUBLIC:
    assert (ROOT/name).is_file(), f'Missing published file: {name}'
    if name.endswith('.html'):
        p=Page(); p.feed((ROOT/name).read_text()); pages[name]=p
        assert len(p.ids)==len(set(p.ids)), f'Duplicate IDs in {name}'
        assert any(t=='title' for t,a in p.nodes), f'Missing title in {name}'
        assert any(t=='meta' and a.get('name')=='viewport' for t,a in p.nodes), f'Missing viewport in {name}'
for name,p in pages.items():
    for tag,a in p.nodes:
        for attr in ('href','src'):
            link=a.get(attr)
            if not link: continue
            u=urlsplit(link)
            assert u.scheme!='http', f'Insecure link in {name}: {link}'
            if u.scheme or u.netloc: continue
            target=u.path.lstrip('/') or name
            if u.path=='/': target='index.html'
            assert target in PUBLIC, f'Unpublished/broken local link in {name}: {link}'
            if u.fragment and target in pages:
                assert u.fragment in pages[target].ids, f'Broken fragment in {name}: {link}'
p=pages['index.html']
assert sum(t=='h1' for t,a in p.nodes)==1
form_page=pages['enquire.html']
form=next(a for t,a in form_page.nodes if t=='form')
assert form['method'].lower()=='post' and form['action']=='https://formsubmit.co/hello@avorlume.com'
inputs={a['name']:a for t,a in form_page.nodes if t in ('input','textarea','select') and 'name' in a}
assert inputs['_captcha']['value']=='true'
assert inputs['_next']['value']=='https://avorlume.com/thanks.html'
for name in ['name','email','service','details','consent']:
    assert 'required' in inputs[name], f'Required field missing: {name}'
assert inputs['email']['type']=='email'
assert inputs['consent']['type']=='checkbox'
assert inputs['details']['maxlength']=='2000'
assert inputs['_honey']['tabindex']=='-1'
assert p.jsonld[0]['founder']['name']=='Mansoor Ijaz'
assert (ROOT/'CNAME').read_text().strip()=='avorlume.com'
for name,page in pages.items():
    for tag,attrs in page.nodes:
        for relation in ('aria-describedby','aria-controls'):
            for element_id in attrs.get(relation,'').split():
                assert element_id in page.ids, f'Missing {relation} target in {name}: {element_id}'
import re
for element_id in re.findall(r"byId\('([^']+)'\)", (ROOT/'demo.js').read_text()):
    assert element_id in pages['index.html'].ids, f'Missing demo element: {element_id}'
for asset in re.findall(r"url\(['\"]?([^)'\"]+)", (ROOT/'styles.css').read_text()):
    assert asset.lstrip('/') in PUBLIC, f'Missing stylesheet asset: {asset}'
assert not any(t=='form' for t,a in pages['index.html'].nodes), 'Homepage contact is email-first while form delivery is unverified'
print(f'PASS: {len(PUBLIC)} public files, {len(pages)} HTML pages; local links, fragments, metadata and form safeguards.')
