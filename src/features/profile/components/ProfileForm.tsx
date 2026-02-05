interface ProfileFormProps {
  name: string;
  email: string;
  onNameChange: (name: string) => void;
  onEmailChange: (email: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function ProfileForm({
  name,
  email,
  onNameChange,
  onEmailChange,
  onSubmit,
}: ProfileFormProps) {
  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6">Profile</h2>

      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
            className="w-full p-3 border border-dark-border rounded bg-dark-input text-white"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
            className="w-full p-3 border border-dark-border rounded bg-dark-input text-white"
            placeholder="Enter your email"
          />
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-primary text-white rounded cursor-pointer hover:bg-primary-light transition-colors"
        >
          Save Profile
        </button>
      </form>
    </div>
  );
}