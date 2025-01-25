import { UserIcon } from '@heroicons/react/20/solid';

const AgentChatAvatar = () => {
  return (
    <label
      htmlFor="avatar"
      className="mb-4 text-white btn btn-block bg-[#3C3F41] border-[#3C3F41]"
    >
      <UserIcon className="w-4 h-4" />Avatar
      <input
        type="file"
        id="avatar"
        className="hidden w-4/5 magick-input no-focus ring-secondary-main border-secondary-main"
        // onChange={handleFileChange}
        accept="image/*"
      />
    </label>
  );
};

export default AgentChatAvatar;
