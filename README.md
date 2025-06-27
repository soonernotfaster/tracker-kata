# Tracker in React

## Developer setup

There is a `devcontainer`, but save your money by running it locally using Docker.

This repo uses the [Scripts to Rule Them All](https://github.blog/engineering/scripts-to-rule-them-all/) pattern, where applicable.
This allows `uv` dependencies to instal on container start.

1. In VS Code install [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
1. Clone the repo
1. Open the repo using the "Dev Containers: Open Folder in Container" command in VS Code

When running this in a container, you will need to setup your git config in order to commit code.

Execute the following:

```bash
git config --global user.email "<your email>"
git config --global user.name "<your name>"
```

## Requirements

[Resources](#Resources) are after the feature descriptions.

### User Stories

As a product manager
I want to add work items to the backlog
So that the development team can implement them

As a product manager
I want work items to persist when I reload the page
So that I can work across multiple sessions

As a product manager
I want to reorder items to the backlog
So that I can steer the project

As a product manager
I want to be able to add descriptions
So that I can share acceptence criteria with the team

As a developer
I want to be able to estimate a work item
So that I can set expectations about delivery

As a developer
I want to be able change the status of a work item
So that I can communicate progress

As a developer
I want to be able to comment on a work item
So that I can communicate progress and share technical notes
