type AgentCreatorInputContainerProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * A container component for wrapping content within the AgentCreator interface.
 * This can be used to group related input fields or any other UI elements.
 *
 * @param props - The properties of the AgentCreatorInputContainer component.
 * @returns A div wrapping the provided children with optional className.
 */
const AgentCreatorInputContainer: React.FC<AgentCreatorInputContainerProps> = ({
  children,
  className = 'col-span-full',
}) => {
  return <div className={className}>{children}</div>;
};

export default AgentCreatorInputContainer;
