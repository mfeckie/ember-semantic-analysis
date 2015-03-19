# Ember-semantic-analysis

Sentiment analysis on the fly.  The word list is from [AFIN-111](http://www2.imm.dtu.dk/pubdb/views/publication_details.php?id=6010).  Only English language is supported.

## Installation

If you're using ember-cli, installation is trivial.

`ember install:addon ember-semantic-analysis`

## Usage

Currently there is only one method of use

```js
export default Ember.ControllerServiceWhatever.extend({
  semantic: Ember.inject.service(),
  someProperty: function () {
    return this.get('semantic').sentiment('some variable or other string');
  }.property('someCacheBustingVariable')
})
```

Input is stripped of punctuation prior to analysis.

## Running Tests

* `ember test`
* `ember test --server`

## Contributions

Contributions for bug fixes are welcome with tests and documentation.  Please reach out to me if your are thinking about adding a feature before sending a pull request.  This reduces the likelihood of doing work that won't be merged, though if you're forking for your own project then of course knock yourself out and go crazy!

If you want to make a suggestion, please open an issue on Github.

Whatever happens, remember, **I put this out her for free**, so if you don't like, don't agree or it doesn't work the way you want - please still be polite and constructive.
