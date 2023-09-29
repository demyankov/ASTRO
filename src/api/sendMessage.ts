const apiPath = `${import.meta.env.PUBLIC_BOT_API_PATH}/bot${
  import.meta.env.PUBLIC_TELEGRAM_TOKEN
}/sendMessage?chat_id=${import.meta.env.PUBLIC_CHAT_ID}&parse_mode=html`;

export const sendMessage = async ({
  message,
}: {
  message: string;
}): Promise<void> => {
  const response = await fetch(`${apiPath}&text=${message}`);

  if (!response.ok) {
    const error = await response.json();

    await Promise.reject(error.description || "Приносим свои извинения");
  }
};
