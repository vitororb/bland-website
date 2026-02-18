type Props = {
  question: string;
  answer: string;
};

export const FaqCard = ({ question, answer }: Props) => {
  return (
    <div className="rounded-lg bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-2xl">
      <h3 className="text-secondary font-cinzel mb-3 text-xl font-bold">
        {question}
      </h3>
      <p className="text-gray-700">{answer}</p>
    </div>
  );
};
