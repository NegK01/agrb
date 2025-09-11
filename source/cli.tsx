#!/usr/bin/env node
import { render } from "ink";
import meow from "meow";
import App from "./app.js";

const cli = meow(
	`
	Usage
	  $ auto-rebase

	Options
		--name  Your name

	Examples
	  $ auto-rebase --name=Jane
	  Hello, Jane
`,
	{
		importMeta: import.meta,
		flags: {
			name: {
				type: "string",
			},
		},
	},
);

render(<App name={cli.flags.name} />);
