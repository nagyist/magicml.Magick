'use client'

import { api } from '@magickml/portal-server-provider'
import { TemplateCard } from '@magickml/portal-ui'

import { useUser } from '@clerk/nextjs'
import {
  PageHeader,
  type PageHeaderProps,
  PageSection,
  imgPrep,
} from '@magickml/pages-shared'

const header: PageHeaderProps = {
  title: 'Create an Agent',
  description:
    'Choose from a selection of our Official Magick Agents that you would like to customize and make your own!',
  loading: false,
}

export const TemplatesPage = () => {
  const { isSignedIn } = useUser()

  const { data: officalTemplates, ...officialQuery } =
    api.templates.find.useQuery({
      type: 'OFFICIAL',
    })

  const { data: communityTemplates, ...communityQuery } =
    api.templates.find.useQuery(
      {
        type: 'COMMUNITY',
      },
      {
        enabled: isSignedIn,
      }
    )

  const { data: userTemplates, ...userQuery } = api.templates.find.useQuery(
    {
      self: true,
    },
    {
      enabled: isSignedIn,
    }
  )

  return (
    <>
      <PageHeader {...header} />

      <PageSection
        title="Official Agent Templates"
        loading={officialQuery.isLoading}
        key="official"
      >
        {!officialQuery.isLoading &&
          officalTemplates &&
          officalTemplates.map((t, i: number) => (
            <TemplateCard
              {...t}
              key={`${t.id}--official`}
              image={imgPrep(t.image)}
            />
          ))}
      </PageSection>

      {/* Only show community templates if the user is signed in */}
      {communityTemplates && communityTemplates?.length > 0 && (
        <PageSection
          title="Community Agent Templates"
          loading={isSignedIn && communityQuery.isLoading}
          key="community"
        >
          {!communityQuery.isLoading &&
            communityTemplates &&
            communityTemplates.map((t, i: number) => (
              <TemplateCard
                key={`${t.id}--community`}
                {...t}
                image={imgPrep(t.image)}
              />
            ))}
        </PageSection>
      )}

      {userTemplates && userTemplates?.length > 0 && (
        <PageSection
          title="Your Agent Templates"
          loading={isSignedIn && userQuery.isLoading}
          key="user-templates"
        >
          {!userQuery.isLoading &&
            userTemplates &&
            userTemplates.map((t, i: number) => (
              <TemplateCard
                key={`${t.id}--user`}
                {...t}
                image={imgPrep(t.image)}
              />
            ))}
        </PageSection>
      )}
    </>
  )
}
