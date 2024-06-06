import { Icon } from "@iconify/react"

import { LinkButton } from "./LinkButton"

export const ProjectLink = ({ variant, children, href, icon }) => (
  <LinkButton
    variant={variant}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
    <Icon icon={icon} />
  </LinkButton>
)

export const ProjectInfo = ({ project }) => {
  return (
    <div className="p-8 max-h-[70dvh] overflow-y-auto drawer-desc">
      <h5 className="mb-4 text-lg font-semibold underline underline-offset-8">
        Project Information
      </h5>

      <div>
        <p className="mb-1">
          <span className="inline-block mr-2 font-medium">Categories:</span>{" "}
          <span>{project.categories}</span>
        </p>
        <p className="mb-1">
          <span className="inline-block mr-2 font-medium">Technologies:</span>{" "}
          <span>{project.techs}</span>
        </p>
        <p className="mb-1">
          <span className="inline-block mr-2 font-medium">Demo URL:</span>{" "}
          <a
            href={project.demo_link}
            target="_blank"
            rel="noreferrer noopener"
            className="text-accent hover:underline transition-all duration-150"
          >
            {project.demo_link}
          </a>
        </p>
      </div>
    </div>
  )
}
