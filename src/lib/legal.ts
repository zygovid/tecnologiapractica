export const legalInfo = {
  name: '',
  nif: '',
  address: '',
  email: 'hola@tecnologiapractica.com',
  phone: '',
  activity:
    'Divulgación técnica y servicios de documentación, revisión y soporte de automatización.',
};

export const hasLegalIdentity = Boolean(
  legalInfo.name && legalInfo.nif && legalInfo.address,
);
