# overmind.js collection editor
https://codesandbox.io/s/github/100ideas/overmind-schema-collections/tree/codesandbox/

- define schemas w/ validation rules
- create collections based on combinations of schemas
- view / edit items of collections

---

### config

copy `.env.template` to `.env`; change as desired

### changes

#### 8 feb 19

`react-scripts` seems to be setting file permission bits inappropriately [#6314](https://github.com/facebook/create-react-app/issues/6314). fix it with

```
find . -type f -perm -o+rx -print0 | xargs -0 chmod 0644
```

codebase derived from [github/100ideas/overmind-routing-demo/](https://github.com/100ideas/overmind-routing-demo/)
