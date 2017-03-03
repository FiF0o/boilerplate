# Boilerplate
Boilerplate website using pug/jade as front-end, scss (sass) - static assets.</br>
Gulp is used to bundle files.</br>

live-reload opens on port `:63342`.</br>
serving static assets from `./build` on port `:3000`.</br>

## Scripts
get task manager command lists: `gulp help`.
`gulp start` to build the static assets and develop.
`gulp build` to generate static assets.

## Improvements
- Print version
- Environment/OS agnostic: e.g. Docker container as there are system dependencies using ruby (sass, compass), C librairies (image resizing)
- npm scripts to run and automate builds
- CI/CD
- Badges
- Clean deadcode

## Other
if npm dependencies break (node-gyp, etc..), please use `npm rebuild`.
