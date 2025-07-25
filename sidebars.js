/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // Manual sidebar configuration for Catalysis documentation
  tutorialSidebar: [
    'catalysis-network/intro',
    {
      type: 'category',
      label: 'Catalysis Core',
      items: [
        'core/overview',
        {
          type: 'category',
          label: 'Network',
          items: [
            'core/network/intro',
            'core/network/catalyst-sdk',
            'core/network/contracts',
            'core/network/integration',
            'core/network/faqs',
          ],
        },
        {
          type: 'category',
          label: 'Node Operators',
          items: [
            'core/operators/intro',
            'core/operators/running-a-node',
            'core/operators/faqs',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Catalysis Coverage',
      items: [
        'coverage/intro',
        'coverage/faqs',
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      items: [
        'resources/references',
      ],
    },
  ],
};

export default sidebars;
