import { Button, Container, Typography } from "@mui/material"
import CodeIcon from "@mui/icons-material/Code"
import InstallDesktopIcon from "@mui/icons-material/InstallDesktop"
import MenuBookIcon from "@mui/icons-material/MenuBook"
import CloudIcon from "@mui/icons-material/Cloud"
import FeedbackIcon from "@mui/icons-material/Feedback"

export default function LandingPage() {
  return (
    <Container maxWidth="lg" className="py-12">
      <header className="text-center mb-16">
        <Typography variant="h1" className="text-4xl font-bold mb-4">
          Dev Starter
        </Typography>
        <Typography variant="h2" className="text-xl text-gray-600 mb-8">
          Simplify Your Development Setup
        </Typography>
        <Button variant="contained" color="primary" size="large" className="bg-black text-white hover:bg-gray-800">
          Get Started
        </Button>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <FeatureSection
          icon={<CodeIcon fontSize="large" />}
          title="Copy-Paste Templates"
          description="Quickly set up your server with ready-to-use index files for Express, PHP, and more."
        />
        <FeatureSection
          icon={<InstallDesktopIcon fontSize="large" />}
          title="NPM Install Generator"
          description="Generate npm install commands for multiple dependencies in one go."
        />
        <FeatureSection
          icon={<MenuBookIcon fontSize="large" />}
          title="Quick Documentation Access"
          description="Access documentation for various libraries and dependencies with ease."
        />
        <FeatureSection
          icon={<CloudIcon fontSize="large" />}
          title="CDN Link Generator"
          description="Fetch CDN links for popular libraries without navigating multiple sites."
        />
      </main>

      <FeedbackSection />
    </Container>
  )
}

function FeatureSection({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg">
      <div className="mb-4">{icon}</div>
      <Typography variant="h3" className="text-xl font-semibold mb-2">
        {title}
      </Typography>
      <Typography variant="body1" className="text-gray-600">
        {description}
      </Typography>
    </div>
  )
}

function FeedbackSection() {
  return (
    <section className="mt-16 text-center">
      <Typography variant="h2" className="text-2xl font-semibold mb-4">
        We Value Your Feedback
      </Typography>
      <Typography variant="body1" className="text-gray-600 mb-6">
        Have suggestions or concerns? We'd love to hear from you!
      </Typography>
      <Button
        variant="outlined"
        color="primary"
        size="large"
        startIcon={<FeedbackIcon />}
        className="border-black text-black hover:bg-gray-100"
      >
        Contact Us
      </Button>
    </section>
  )
}



