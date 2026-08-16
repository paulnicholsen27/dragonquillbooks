# Dragon Quill Books

This repository contains the source code for the Dragon Quill Books website and the content needed to keep it running after a handoff or ownership transfer.

## Live site

- Production URL: https://www.dragonquillbooks.com
- Netlify site: deployed through Netlify
- Domain registration and DNS management: Namecheap
- GitHub repository: https://github.com/paulnicholsen27/dragonquillbooks
- Primary branch: main

## Purpose of this document

This README is intended as an ownership-transfer guide. It explains where the site lives, who manages the required services, and what should be handed off to the next owner without exposing actual credentials, tokens, or passwords.

## Site architecture

The site is a static Eleventy website with a Decap CMS-powered blog. It is published from GitHub and hosted on Netlify.

### Key project files

- src/_data/client.js — contact details and live domain configuration
- src/admin/config.yml — Decap CMS backend and repo configuration
- netlify.toml — Netlify build and deployment configuration
- package.json — project scripts and build dependencies
- src/content/ — page and blog content source files
- public/ — generated built site output

## Hosting and DNS

### Netlify

The live website is hosted on Netlify. This means the next site owner should have access to:

- the Netlify account that owns the site
- the Netlify project connected to the GitHub repository
- the production deployment settings
- the custom domain configuration for the live website

The Netlify project should be checked for:

- deployment source connected to the GitHub repository
- production branch set to main
- build settings still matching the project configuration
- custom domain linked to the live website

### Namecheap

The custom domain is managed through Namecheap. This controls the domain registration, DNS records, and the domain's connection to the Netlify site.

The transfer owner should be able to access:

- the Namecheap account tied to the domain
- domain renewal and contact details
- DNS records for the live domain
- any domain forwarding or SSL-related configuration

When transitioning ownership, confirm the domain still points to the correct Netlify site and that HTTPS is active.

## GitHub ownership

The website source code lives in GitHub. The new owner should be added as a collaborator or should receive full repository ownership if the site is being transferred completely.

The repository should be checked for:

- GitHub account access
- branch protection settings
- collaborator permissions
- repository secrets or environment variables used by the project

The source repo is configured as the deployment source for Netlify, so losing GitHub access would interrupt site updates.

## CMS and content management

The blog uses Decap CMS. The site admin panel is configured in src/admin/config.yml and points to the GitHub repository and authentication backend used by the CMS.

The new owner should confirm that:

- the CMS still loads correctly at the site admin URL
- the repository used by the CMS is the correct one
- admin access is still available to the intended people
- the authentication provider is active and correctly connected

This project is set up to use a hosted authentication flow, and the exact credentials or service tokens should be handled through the appropriate account login rather than stored in the codebase.

## Required credentials and account access

The following should be transferred securely to the next owner, but the actual credentials themselves should not be written into this README or committed to the repository:

- GitHub account access for the repository
- Netlify account access for the production site
- Namecheap account access for the registered domain
- Decap CMS or authentication-provider access
- Any email, form, or CRM credentials tied to the site
- Any deploy tokens, app passwords, or service credentials used for a build or content workflow

The safest practice is to store these in a password manager, update the owner records, and keep the repository limited to non-sensitive configuration only.

## Ownership transfer checklist

Use the following sequence when transferring the site to someone else:

1. Confirm who the new owner is and whether they should receive full ownership or limited admin access.
2. Add the new owner to the GitHub repository with the appropriate permissions.
3. Add the new owner to the Netlify account and make sure they can publish the site.
4. Confirm the Namecheap domain account is transferred or shared in the correct way.
5. Verify the domain's DNS records still point to Netlify.
6. Test the production site at the live URL and confirm HTTPS is active.
7. Log in to the CMS and ensure the admin workflow still works.
8. Check that all site content, posts, and assets still render correctly.
9. Confirm any connected email or contact form services remain active.
10. Update the internal records so the next responsible person knows where all of the accounts live.

## Recommended handoff notes

Before finalizing the handoff, the new owner should confirm the following:

- the site is live and buildable from the repository
- the production domain is active and correctly configured
- the CMS can publish content without a broken auth flow
- no secrets are kept inside the site files or project config
- all account ownership is documented outside the codebase

## Local development

To work on the site locally:

```bash
npm install
npm start
```

For a production build:

```bash
npm run build
```

This project is built with Eleventy and uses the default project scripts defined in package.json.

## Summary

This site is a Netlify-hosted Eleventy website with a custom domain managed in Namecheap and a GitHub-backed CMS workflow. The operational handoff should focus on the actual service accounts and access rights, not on storing credentials in code. The GitHub repository, Netlify account, Namecheap domain account, and CMS authentication provider are all part of the ownership chain and should be passed along intentionally and securely.
