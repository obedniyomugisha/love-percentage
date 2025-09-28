import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';

import { experimental_AstroContainer } from 'astro/container';
import OpenGraphImage from '../components/SocialMedia/OpenGraphImage.astro';
import { extractMetaImageTag } from '../lib/utils';

export const OGImageURL = defineAction({
  input: z.object({
    names: z.string(),
    percentage: z.number().min(0).max(100),
  }),
  handler: async ({ names, percentage }, { url }) => {
    const container = await experimental_AstroContainer.create();
    const html = await container.renderToString(OpenGraphImage, {
      props: {
        names,
        percentage,
      },
    });

    return extractMetaImageTag(html)?.url.replace(
      'https://example.com',
      url.origin
    );
  },
});
