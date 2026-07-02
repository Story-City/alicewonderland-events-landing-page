import { collection, config, fields } from '@keystatic/core'

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    cities: collection({
      label: 'Cities',
      slugField: 'city',
      path: 'src/content/cities/*',
      // Default collection format is YAML-only files (.yaml). Astro uses .md with
      // frontmatter; map that by storing YAML data + markdown body in one .md file.
      format: { data: 'yaml', contentField: 'body' },
      columns: ['eventDate'],
      schema: {
        city: fields.slug({ name: { label: 'City' } }),
        cityName: fields.text({ label: 'City name' }),
        locationStart: fields.text({ label: 'Location start' }),
        locationLink: fields.url({ label: 'Location link' }),
        hasPhotographer: fields.checkbox({ label: 'Has photographer?', defaultValue: true }),
        eventDate: fields.date({ label: 'Date of event' }),
        groupTicketPrice: fields.text({ label: 'Group ticket price' }),
        soloTicketPrice: fields.text({ label: 'Solo ticket price' }),
        ticketSaleLink: fields.url({ label: 'Ticket sale link (group/team)' }),
        soloTicketTitle: fields.text({ label: 'Solo ticket title', defaultValue: 'Lone Hunter' }),
        soloButtonLabel: fields.text({ label: 'Solo button label', defaultValue: 'Buy Ticket' }),
        groupTicketTitle: fields.text({ label: 'Group ticket title', defaultValue: 'Team Pass' }),
        groupButtonLabel: fields.text({ label: 'Group button label', defaultValue: 'Buy Tickets' }),
        bundleCopy: fields.text({ label: 'Bundle copy line (optional)' }),
        locationTime: fields.text({ label: 'Location time' }),
        body: fields.emptyContent({ extension: 'md' }),
      },
    }),
    reviews: collection({
      label: 'Reviews',
      slugField: 'reviewSlug',
      path: 'src/content/reviews/*',
      format: { data: 'yaml', contentField: 'body' },
      schema: {
        reviewSlug: fields.slug({ name: { label: 'Review slug' } }),
        comment: fields.text({ label: 'Comment' }),
        rating: fields.number({ label: 'Rating', defaultValue: 5, validation: { min: 1, max: 5 } }),
        author: fields.text({ label: 'Author' }),
        videoUrl: fields.url({ label: 'Video URL (optional, YouTube)' }),
        socials: fields.array(
          fields.object({
            platform: fields.select({
              label: 'Platform',
              options: [
                { label: 'Instagram', value: 'instagram' },
                { label: 'TikTok', value: 'tiktok' },
                { label: 'YouTube', value: 'youtube' },
                { label: 'Twitter', value: 'twitter' },
              ],
              defaultValue: 'instagram',
            }),
            url: fields.url({ label: 'Profile URL' }),
            followers: fields.text({ label: 'Followers (optional)' }),
          }),
          { label: 'Social links' },
        ),
        body: fields.emptyContent({ extension: 'md' }),
      },
      columns: ['comment', 'rating', 'author'],
    }),
  },
})
