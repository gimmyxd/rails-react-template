## Rails with React template

### Local Development Setup

#### Prerequisites:

##### General Software Requirements
- [Node.js](https://nodejs.org) version. Make sure that [npm](https://www.npmjs.com/) is installed with it as well.
- [yarn](https://yarnpkg.com/en/docs/install)
- [Ruby version 3.3.6](https://www.ruby-lang.org/en/news/2023/12/25/ruby-3-3-0-released/)
- [Postgres](https://postgresapp.com)

#### Bundle Install and Setup DB
```
bundle install
bundle exec rake setup
```

#### Execute yarn
```
bin/yarn
```

#### Spinning up the App
```
./bin/dev
```

#### Run code checks
```
bundle exec rubocop
```

#### Run RSpec tests
```
bundle exec rspec
```
