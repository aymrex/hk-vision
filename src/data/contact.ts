export const contact = {
  whatsappNumber: "56900000000",
  phoneDisplay: "+56 9 0000 0000",
  phoneHref: "+56900000000",
  email: "contacto@hkvision.cl",
  city: "Santiago, Chile",
  whatsappMessage:
    "Hola HK Vision, quiero cotizar una solucion de seguridad o software.",
};

export const whatsappHref = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
  contact.whatsappMessage,
)}`;
