# Gram lint

A CLI for processing Gram text literal files. 

``` bash
→ ./bin/cli.js --help
Usage: gram [options] [path | glob ...]

  undefined

Options:

  -h  --help                              output usage information
  -v  --version                           output version number
  -o  --output [path]                     specify output location
  -r  --rc-path <path>                    specify configuration file
  -i  --ignore-path <path>                specify ignore file
  -s  --setting <settings>                specify settings
  -e  --ext <extensions>                  specify extensions
  -u  --use <plugins>                     use plugins
  -w  --watch                             watch for changes and reprocess
  -q  --quiet                             output only warnings and errors
  -S  --silent                            output only errors
  -f  --frail                             exit with 1 on warnings
  -t  --tree                              specify input and output as syntax tree
      --report <reporter>                 specify reporter
      --file-path <path>                  specify path to process as
      --ignore-path-resolve-from dir|cwd  resolve patterns in `ignore-path` from its directory or cwd
      --ignore-pattern <globs>            specify ignore patterns
      --silently-ignore                   do not fail when given ignored files
      --tree-in                           specify input as syntax tree
      --tree-out                          output syntax tree
      --inspect                           output formatted syntax tree
      --[no-]stdout                       specify writing to stdout (on by default)
      --[no-]color                        specify color in report (on by default)
      --[no-]config                       search for configuration files (on by default)
      --[no-]ignore                       search for ignore files (on by default)

Examples:

  # Process `input.gram`
  $ gram input.gram -o output.gram

  # Pipe
  $ gram < input.gram > output.gram

  # Rewrite all applicable files
  $ gram . -o
  ```

  - See [unified-args](https://github.com/unifiedjs/unified-args) for usage details
  