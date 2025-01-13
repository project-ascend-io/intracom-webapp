type FeatureProps = {
  icon: string;
  title: string;
  description: string;
};

const FeatureCard = (props: FeatureProps) => {
  const { icon, title, description } = props;
  return (
    <div className="text-center p-8 prose">
      <p className="text-xl my-0">{icon}</p>
      <p className="font-semibold my-0">{title}</p>
      <p className="my-0">{description}</p>
    </div >
  );
};

const FeatureSection = () => {
  const featureCards = [
    {
      icon: '🏠',
      title: 'Intuative Navigation',
      description: 'Use Intracom to navigate your workspace efficiently.',
    },
    {
      icon: '📱',
      title: 'Channel Management',
      description:
        'Create and manage channels, including direct messages, voice calls, and video calls.',
    },
    {
      icon: '💬',
      title: 'Messages',
      description: 'Send real-time messages and notifications to your team.',
    },
    {
      icon: '📁',
      title: 'File Sharing',
      description: 'Share files and documents with your team.',
    },
  ];

  return (
    <>
      <div className="container m-auto grid grid-cols-4 gap-4">
        {featureCards.map((card, index) => (
          <FeatureCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div >
    </>
  );
};

export default FeatureSection;
