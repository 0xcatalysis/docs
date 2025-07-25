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
      label: 'Catalysis Network',
      items: ['catalysis-network/overview'],
    },
    {
      type: 'category',
      label: 'Catalysis Core',
      items: [
        'catalysis-core/overview',
        {
          type: 'category',
          label: 'Network',
          items: ['network/intro', 'network/catalyst-sdk', 'network/contracts', 'network/integration', 'network/faqs'],
        },
        {
          type: 'category',
          label: 'Node Operators',
          items: ['operators/intro', 'operators/running-a-node', 'operators/faqs'],
        },
        {
          type: 'category',
          label: 'Restaking Protocols',
          items: ['restaking-protocols/overview'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Catalysis Coverage',
      items: ['catalysis-coverage/overview'],
    },
  ],
};

export default sidebars;
