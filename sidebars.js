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
  // Manual sidebar configuration
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Stakeholders',
      items: [
        'stakeholders/overview',
        {
          type: 'category',
          label: 'Restakers',
          items: ['stakeholders/restakers/overview', 'stakeholders/restakers/faqs'],
        },
        {
          type: 'category',
          label: 'Coverage Clients',
          items: ['stakeholders/coverage-clients/overview', 'stakeholders/coverage-clients/faqs'],
        },
        {
          type: 'category',
          label: 'CoverPool Curators',
          items: ['stakeholders/coverpool-curators/overview', 'stakeholders/coverpool-curators/faqs'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Catalysis Core',
      items: [
        'catalysis-core/overview',
        {
          type: 'category',
          label: 'Network',
          items: ['catalysis-core/network/intro', 'catalysis-core/network/quickstart', 'catalysis-core/network/catalyst-sdk', 'catalysis-core/network/contracts', 'catalysis-core/network/integration', 'catalysis-core/network/faqs'],
        },
        {
          type: 'category',
          label: 'Node Operators',
          items: ['catalysis-core/operators/intro', 'catalysis-core/operators/running-a-node', 'catalysis-core/operators/faqs'],
        },
        {
          type: 'category',
          label: 'Restaking Protocols',
          items: ['catalysis-core/restaking-protocols/intro', 'catalysis-core/restaking-protocols/overview', 'catalysis-core/restaking-protocols/faqs'],
        },
      ],
    },
    'resources',
    'faqs',
  ],
};

export default sidebars;
