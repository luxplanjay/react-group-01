# Показать

На componentDidMount в ArticlesPage

```js
this.props.history.push({
  pathname: this.props.location.pathname,
  search: `category=all`,
});
```
