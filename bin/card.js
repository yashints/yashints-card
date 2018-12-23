#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require( "chalk" );
const boxen = require( "boxen" );

// Some sweet ascii art
const avatar = require( "../art/avatar" );
const banner = require( "../art/banner" );

const newline = "\n";

// Define options for Boxen
const options = {
	padding: 1,
	margin: 1,
	borderStyle: "round"
};

// Text + chalk definitions
const data = {
	name: chalk.magenta.bold( "Yaser Adel Mehraban" ),
	handle: chalk.magenta.bold( "yashints" ),
	work: chalk.green( "Lead Consultant at Readify" ),
	twitter: chalk.cyan( "https://twitter.com/" ),
	github: chalk.cyan( "https://github.com/" ),
	linkedin: chalk.cyan( "https://linkedin.com/in/" ),
	web: chalk.yellow( "https://mehraban.com.au.com" ),
	npx: chalk.cyan( "npx yashints" ),
	labelWork: chalk.white.bold( "      Work:" ),
	labelTwitter: chalk.white.bold( "   Twitter:" ),
	labelGitHub: chalk.white.bold( "    GitHub:" ),
	labelLinkedIn: chalk.white.bold( "  LinkedIn:" ),
	labelWeb: chalk.white.bold( "       Web:" ),
	labelCard: chalk.white.bold( "      Card:" ),
	bio: chalk.white( `This man whose name only looks hard to say is a 
creative web dev, speaker, blogger, hiker and a Die Hard fan, 
but don’t hold this against him.` )
};

// Actual strings we're going to output
const heading = `             ${ data.name }`;
const working = `\n${ data.labelWork }  ${ data.work }`;
const twittering = `${ data.labelTwitter }  ${ data.twitter }${data.handle}`;
const githubing = `${ data.labelGitHub }  ${ data.github }${data.handle}`;
const linkedining = `${ data.labelLinkedIn }  ${ data.linkedin }${data.handle}`;
const webing = `${ data.labelWeb }  ${ data.web }`;
const carding = `\n${ data.labelCard }  ${ data.npx }`;
const bio = `\n${ data.bio }`;

const card = [
	banner,
	heading, working, 
	twittering, githubing, linkedining,
	webing, carding, bio
];

// Put all our output together into a single variable so we can use boxen effectively
const output = card.join( newline );

console.log( chalk.green( boxen( output, options ) ) ); // eslint-disable-line no-console
