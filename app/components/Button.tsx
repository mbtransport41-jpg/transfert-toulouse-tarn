type Props = {
  children: React.ReactNode;
};

export default function Button({ children }: Props) {
  return (
    <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-xl transition-all duration-300">
      {children}
    </button>
  );
}