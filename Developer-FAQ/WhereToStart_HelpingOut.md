# Lemme Help!

## I want to help out, where do I start and what can I do?

Please make sure to read our [Code of Conduct](https://github.com/codidact/core/wiki/Codidact-Code-of-Conduct) first.

### Background

We (will) exist in two parts of a non-profit company: the open source software and an instance of that software.

The software is currently in development and in the meantime, we are hosting an instance of [Writing Codidact](https://writing.codidact.com/) using open source software known as qpixel

We have 4 places where different things are done:
- [github](https://github.com/codidact)
  - used for working on code
    - see ['Contributing to Codidact'](https://github.com/codidact/core/blob/develop/CONTRIBUTING.md)
  - has a [Wiki](https://github.com/codidact/core/wiki)
    - [committing standards](https://github.com/codidact/core/wiki/Committing-guidelines)
    - coding guidelines
    - [Code of Conduct](https://github.com/codidact/core/wiki/Codidact-Code-of-Conduct)
  - has a FAQ list
- [Discourse](https://forum.codidact.org/)
  - for discussions and questions about the project that is the software
- [Codidact meta](https://meta.codidact.com/)
  - for questions about the instance that will be run and the current 'stopgap' usage of qpixel
- [Discord](https://discord.gg/WZ7aTst)
  - everyday questions
  - general chat

### Codidact's Structure

  We decided some time ago that we split the projects into multiple parts,
  'authentication' and 'core' for now, they can be found at:

  https://github.com/codidact/core
  https://github.com/codidact/authentication

  There are two main reasons for this:

    - We want to allow people to host their own non "canonical" codidact instances
      and use our authentication server. You will be able to boot up you own core
      instance and just re-use the authentication server provided on `codidact.org`.

    - We want to keep personal information, like passwords and emails, in a
      different database and manage it by a different process. A core instance
      never sees a password, email or other personal information.

### Where to start?
