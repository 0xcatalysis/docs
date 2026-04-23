import React from 'react';

/** External-link icon to Etherscan for an Ethereum address (mainnet). */
export function EtherscanAddressLink({ address, label }) {
  const href = `https://etherscan.io/address/${address}`;
  const ariaLabel = label
    ? `View ${label} on Etherscan`
    : 'View contract on Etherscan';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="etherscan-inline-link"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
      </svg>
    </a>
  );
}

function ariaLabelFor(row) {
  if (row.etherscanLabel) return row.etherscanLabel;
  if (typeof row.name === 'string') return row.name;
  return 'Contract';
}

/**
 * Contract name + optional Etherscan tooltip label when `name` is JSX.
 * @param {{ rows: Array<{ name: React.ReactNode, address: string, etherscanLabel?: string }> }} props
 */
export default function ContractAddressTable({ rows }) {
  return (
    <div className="contract-address-table-wrap">
      <table>
        <thead>
          <tr>
            <th>Contract</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              <td>
                {row.name}{' '}
                <EtherscanAddressLink
                  address={row.address}
                  label={ariaLabelFor(row)}
                />
              </td>
              <td>
                <code>{row.address}</code>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
