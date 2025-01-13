type FeatureProps = {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard = (props: FeatureProps) => {
  const { icon, title, description } = props;
  return (
    <div className="text-center">
      <p>{icon}</p>
      <p>{title}</p>
      <p>{description}</p>
    </div>
  )
}

const FeatureSection = () => {
  const featureCards = [
    { icon: '🏠', title: 'Projects', description: 'Organize and collaborate on projects with ease.' },
    { icon: '📱', title: 'Mobile', description: 'Use Intracom on your phone or tablet to stay connected with your team.' },
    { icon: '💬', title: 'Messages', description: 'Send real-time messages and notifications to your team.' },
    { icon: '�', title: 'File Sharing', description: 'Share files and documents with your team.' }
  ]

  return (
    <>
      <div className="container m-auto flex justify-between border">
        {featureCards.map((card, index) => (
          <FeatureCard key={index} icon={card.icon} title={card.title} description={card.description} />
        ))}
      </div>
    </>
  )
}

export default FeatureSection;
