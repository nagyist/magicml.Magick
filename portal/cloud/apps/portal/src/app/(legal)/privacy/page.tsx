import { PrivacyContent } from '@magickml/pages-legal'
import { LegalLayout } from '@magickml/portal-layout-next/server'

export default function privacy() {
  return (
    <LegalLayout
      title="ONEIROCOM | PRIVACY POLICY"
      lastUpdated="2023-06-12"
      pdfLink="/documents/2023-06-12-Privacy-Policy-Oneirocom.docx.pdf"
    >
      <PrivacyContent />
    </LegalLayout>
  )
}
