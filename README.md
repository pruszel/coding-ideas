# A Big Book of Coding Ideas

Inspiration for Coding Students and Teachers

[Visit website]()

## Contributing Ideas

Do you have an idea or suggestion? Please contribute, it's easy! No
coding is necessary. Just follow the simple steps below.

1. Create a new Markdown file under `web/_posts/` named with the date and
title of your idea: `YYYY-MM-DD-my-idea.md`.

1. In that file, add the necessary fields like the name, description, and tags 
for your idea. It's best to look at an [existing file]() to understand the format.

1. Submit a [pull request]() with your file, and that's it! Once approved, 
your idea will be published online.

## Contributing to Development

Interested in adding new features or fixing bugs? Great! Please take a moment
to search through existing [Issues]() on GitHub first. Create a new Issue
with your suggestion(s) if they are not already present.

### Development setup

The site uses [Jekyll]() to compile assets and content.
Jekyll can be run inside a Docker container from the command line:

`$ docker-compose run jekyll`

Jekyll will build the site inside the `web/public/` directory and also
watch for any file changes and recompile. 

Simply open `web/public/index.html` in a browser to preview the site.

Requirements:

- Docker v3.0 or higher
- Docker Compose v1.27 or higher

## License

[GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0.en.html)
