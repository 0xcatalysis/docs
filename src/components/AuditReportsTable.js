import React from 'react';

/**
 * Table of security audit reports with auditor links and PDF downloads.
 * @param {{
 *   rows: Array<{
 *     report: string,
 *     auditor: string,
 *     auditorUrl: string,
 *     date: string,
 *     href: string,
 *     fileName?: string,
 *   }>
 * }} props
 */
export default function AuditReportsTable({ rows }) {
  return (
    <div className="audit-reports-table-wrap">
      <table>
        <thead>
          <tr>
            <th>Report</th>
            <th>Auditor</th>
            <th>Date</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => {
            const fileName =
              row.fileName || row.href.split('/').pop() || 'report.pdf';
            return (
              <tr key={i}>
                <td>{row.report}</td>
                <td>
                  <a
                    href={row.auditorUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {row.auditor}
                  </a>
                </td>
                <td>{row.date}</td>
                <td>
                  <a
                    href={row.href}
                    download={fileName}
                    className="audit-download-link"
                  >
                    PDF
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
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
