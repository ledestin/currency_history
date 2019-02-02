# Currency history

## Notes

A scheduled job collects data and puts into db every hour.

* It's probably the last time I went with jQuery hell. I thought for a project
  this small, I could do without React. Next time I'll use React.
* If I did it again, I'd try using Money gem, it has exchange rates.
* No system tests, mostly because I can't test the graph anyway. I could add one
  to test that the selected button persists on reload.
* On second thought, using local storage to store selected button isn't good,
  because a link can't be sent with the selected currency.

## Getting Started

After you have cloned this repo, run this setup script to set up your machine
with the necessary dependencies to run and test this app:

    % ./bin/setup

It assumes you have a machine equipped with Ruby, Postgres, etc. If not, set up
your machine with [this script].

[this script]: https://github.com/thoughtbot/laptop

After setting up, you can run the application using [Heroku Local]:

    % heroku local

[Heroku Local]: https://devcenter.heroku.com/articles/heroku-local

## Guidelines

Use the following guides for getting things done, programming well, and
programming in style.

* [Protocol](http://github.com/thoughtbot/guides/blob/master/protocol)
* [Best Practices](http://github.com/thoughtbot/guides/blob/master/best-practices)
* [Style](http://github.com/thoughtbot/guides/blob/master/style)

## Deploying

If you have previously run the `./bin/setup` script,
you can deploy to staging and production with:

    % ./bin/deploy staging
    % ./bin/deploy production
