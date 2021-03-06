{{#if logo}}
<p align="center">
  <img alt="logo.svg" width="{{logo.width}}" src="https://cdn.rawgit.com/{{ username }}/{{ name }}/master/{{logo.path}}">
</p>

<p align="center">
  {{description}}
</p>

<br/>
{{else}}
# {{ name }}
> {{ description }}
{{/if}}

{{#if badges}}
## Badges
  {{#trim}}
    {{#if badges.version}}
    [![NPM version](https://img.shields.io/npm/v/{{ name }}.svg?style=flat)](https://npmjs.com/package/{{ name }}) 
    {{/if}}
    
    {{#if badges.downloads}}
    [![NPM downloads](https://img.shields.io/npm/dm/{{ name }}.svg?style=flat)](https://npmjs.com/package/{{ name }}) 
    {{/if}}
    
    {{#if badges.codecov}}
    [![codecov](https://codecov.io/gh/{{ username }}/{{ name }}/branch/master/graph/badge.svg)](https://codecov.io/gh/{{ username }}/{{ name }})
    {{/if}}
    
    {{#if badges.ci}}
    [![CircleCI](https://circleci.com/gh/{{ username }}/{{ name }}/tree/master.svg?style=shield)](https://circleci.com/gh/{{ username }}/{{ name }}/tree/master) 
    {{/if}}
    
    {{#if badges.coverage}}
    [![codecov](https://codecov.io/gh/{{ username }}/{{ name }}/branch/master/graph/badge.svg)](https://codecov.io/gh/{{ username }}/{{ name }})
    {{/if}}
  {{/trim}}
  
{{/if}}


{{#if install}}

## {{#trim}}{{#if install.newname}} {{install.newname}} {{else}} Install {{/if}}{{/trim}}

Install _{{ name }}_:

{{#if install.yarn}}
```bash
# Either globally
yarn global add {{ name }}
# Or locally (preferred)
yarn add {{ name }} --dev
```
{{/if}}

{{#if install.npm}}
or, If you use `npm`:
```bash
npm i {{ name }} -g
npm i {{ name }} --save-dev
```
{{/if}}

{{/if}}


{{#if usage}}
## {{#trim}}{{#if usage.newname}} {{usage.newname}} {{else}} Usage {{/if}}{{/trim}}

```js
const {{ camelize name }} = require('{{name}}')

{{ camelize name }}()
//=> foo
```
{{/if}}


{{#if faq}}
## {{#trim}}{{#if faq.newname}} {{faq.newname}} {{else}} FAQ {{/if}}{{/trim}}
{{#each faq.list as |faq|}}

<details><summary>{{ faq.q }}</summary><br>
{{ faq.a }}
</details>

{{/each}}
{{/if}}


{{#if using}}
## Who is using {{ name }}?
{{#each using.usingList as |using|}}
- [{{using.name}}](https://github.com/{{using.username}}/{{name}}) - {{using.description}}.
{{/each}}
- Feel free to submit yours via pull request :D
{{/if}}


{{#if author}}
## Author

**{{ name }}** © [{{ author }}](https://github.com/{{ username }}), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by {{ author }} with help from contributors ([list](https://github.com/{{ username }}/{{ name }}/contributors)).

> [{{normalizeurl website}}]({{ website }}) · GitHub [@{{ author }}](https://github.com/{{ username }}){{#if twitter}} · Twitter [@{{ twitter }}](https://twitter.com/{{ twitter }}) {{/if}}
{{/if}}