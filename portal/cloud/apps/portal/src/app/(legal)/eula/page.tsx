import { LegalLayout } from '@magickml/portal-layout-next/server'
import { EulaContent } from '@magickml/pages-legal'

export default function privacy() {
  return (
    <LegalLayout
      title="ONEIROCOM | END USER LICENSE AGREEMENT"
      lastUpdated="2023-06-12"
      pdfLink="/documents/2023-06-12-EULA-Oneirocom.doc.pdf"
    >
      <EulaContent />
    </LegalLayout>
  )
}
