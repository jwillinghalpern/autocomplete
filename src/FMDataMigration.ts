const completionSpec: Fig.Spec = {
  name: "FMDataMigration",
  description:
    "Migrates all record data from a source FileMaker Pro file to a copy of a clone file.\n\tCopyright (C) 2021 Claris International Inc. All rights reserved",
  parserDirectives: {
    // parse options like '-src_path' as a single option, not multiple flags smooshed together
    flagsArePosixNoncompliant: true,
  },
  options: [
    {
      name: "-src_path",
      description: "Source file path",
      args: {
        name: "source file path",
        template: "filepaths",
      },
      priority: 100,
    },
    {
      name: "-src_account",
      description:
        "Source Full Access or FMMigration account (default is Admin)",
      args: {},
      priority: 99,
    },
    {
      name: "-src_pwd",
      description:
        "Source Full Access or FMMigration password (default is blank)",
      args: {},
      priority: 98,
    },
    {
      name: "-src_key",
      description: "Source decryption key",
      args: {},
    },

    {
      name: "-clone_path",
      description: "Clone file path",
      args: {
        name: "clone file path",
        template: "filepaths",
      },
      priority: 96,
    },
    {
      name: "-clone_account",
      description:
        "Target Full Access or FMMigration account (default is Admin)",
      args: {},
      priority: 95,
    },
    {
      name: "-clone_pwd",
      description:
        "Target Full Access or FMMigration password (default is blank)",
      args: {},
      priority: 94,
    },
    {
      name: "-clone_key",
      description: "Target decryption key",
      args: {},
    },

    {
      name: "-target_path",
      description:
        '<target file path> (default is source path with " migrated" added)',
      args: {
        name: "target file path",
        template: "filepaths",
      },
      priority: 92,
    },

    {
      name: "-force",
      description: "Overwrite existing target file",
    },
    {
      name: "-ignore_valuelists",
      description: "Use custom value lists from clone instead of source",
    },
    {
      name: "-ignore_accounts",
      description:
        "Use accounts and decryption key from clone instead of source",
    },
    {
      name: "-ignore_fonts",
      description: "Assume no font mapping required for field contents",
    },
    {
      name: "-reevaluate",
      description: "Reevalute all stored calculation fields",
    },
    {
      name: "-rebuildindexes",
      description: "Rebuild all field indexes",
    },

    {
      name: "-v",
      description: "Verbose mode",
    },
    {
      name: "--version",
      description: "Tool will only output the version number",
    },
    {
      name: "-q",
      description: "Quiet mode",
    },
  ],
};
export default completionSpec;
