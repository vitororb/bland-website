export const WhatsappButton = () => {
  return (
    <button
      onClick={() =>
        window.open(
          "https://wa.me/5564999500479?text=Olá, gostaria de fazer uma reserva",
          "_blank"
        )
      }
      className="hover:cursor-pointer fixed bottom-8 right-8 p-4 rounded-full"
    >
      <img
        src="/wpp-icon.png"
        alt="whatsapp-icon"
        className="w-12 h-12 shadow-2xs"
      />
    </button>
  );
};
