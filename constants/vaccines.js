import { fromJS, OrderedMap } from 'immutable';

const vaccines = fromJS([
  {
    name: 'AVA (BioThrax)',
    id: '8b013618-439e-4829-b88f-98a44b420ee8',
    diseases: ['Anthrax'],
  },
  {
    name: 'VAR (Varivax)',
    id: 'f3e08a56-003c-4b46-9dea-216298401ca0',
    diseases: ['Varicella (Chickenpox)'],
  },
  {
    name: 'MMRV (ProQuad)',
    id: '3373721d-3d14-490c-9fa9-69a223888322',
    diseases: [
      'Varicella (Chickenpox)',
      'Measles',
      'Mumps',
      'Rubella (German Measles)',
    ],
  },
  {
    name: 'HepA (Havrix, Vaqta)',
    id: 'a9144edf-13a2-4ce5-b6af-14eb38fd848c',
    diseases: ['Hepatitis A'],
  },
  {
    name: 'HepA-HepB (Twinrix)',
    id: '6888fd1a-af4f-4f33-946d-40d4c473c9cc',
    diseases: ['Hepatitis A', 'Hepatitis B'],
  },
  {
    name: 'HepB (Engerix-B, Recombivax HB)',
    id: 'ca079856-a561-4bc9-9bef-e62429ed3a38',
    diseases: ['Hepatitis B'],
  },
  {
    name: 'Hib-HepB (Comvax)',
    id: '7305d769-0d1e-4bef-bd09-6998dc839825',
    diseases: ['Hepatitis B', 'Haemophilus influenzae type b (Hib)'],
  },
  {
    name: 'Hib (ActHIB, PedvaxHIB, Hiberix)',
    id: 'd241f0c7-9920-4bc6-8f34-288a13e03f4d',
    diseases: ['Haemophilus influenzae type b (Hib)'],
  },
  {
    name: 'HPV4 (Gardasil)',
    id: 'c2fef03c-db7f-483b-af70-50560712b189',
    diseases: ['Human Papillomavirus (HPV)'],
  },
  {
    name: 'HPV2 (Cervarix)',
    id: '286f55e4-e727-4fc4-86b0-5a08ea712a77',
    diseases: ['Human Papillomavirus (HPV)'],
  },
  {
    name: 'TIV (Afluria, Agriflu, FluLaval, Fluarix, Fluvirin, Fluzone, Fluzone High-Dose, Fluzone Intradermal)', // eslint-disable-line max-len
    id: '60e85a31-6a54-48e1-b0b7-deb28120675b',
    diseases: ['Seasonal Influenza (Flu)'],
  },
  {
    name: 'LAIV (FluMist)',
    id: '9e67e321-9a7f-426f-ba9b-28885f93f9b9',
    diseases: ['Seasonal Influenza (Flu)'],
  },
  {
    name: 'JE (Ixiaro)',
    id: '5ce00584-3350-442d-ac6c-7f19567eff8a',
    diseases: ['Japanese Encephalitis'],
  },
  {
    name: 'MMR (M-M-R II)',
    id: 'd10b7bf0-d51e-4117-a6a4-08bdb5cb682a',
    diseases: ['Measles', 'Mumps', 'Rubella (German Measles)'],
  },
  {
    name: 'MCV4 (Menactra)',
    id: '6295fe11-f0ce-4967-952c-f271416cc300',
    diseases: ['Meningococcal'],
  },
  {
    name: 'MPSV4 (Menomune)',
    id: '65f6d6d0-6dd8-49c9-95da-ed9fa403ae96',
    diseases: ['Meningococcal'],
  },
  {
    name: 'MODC (Menveo)',
    id: 'be10b480-7934-46be-a488-66540aac2881',
    diseases: ['Meningococcal'],
  },
  {
    name: 'Tdap (Adacel, Boostrix)',
    id: '0c6c33fb-f4dc-44c6-8684-625099f6fa21',
    diseases: ['Pertussis (Whooping Cough)', 'Tetanus (Lockjaw)', 'Diphtheria'],
  },
  {
    name: 'PCV13 (Prevnar13)',
    id: 'd8c5a723-21e2-49a6-a921-705da16563e1',
    diseases: ['Pneumococcal'],
  },
  {
    name: 'PPSV23 (Pneumovax 23)',
    id: '4005de2f-8e6d-40ae-bb5f-068ac56885b8',
    diseases: ['Pneumococcal'],
  },
  {
    name: 'Polio (Ipol)',
    id: '9c1582f2-8a7b-4bae-8ba5-656efe33fb29',
    diseases: ['Polio'],
  },
  {
    name: 'Rabies (Imovax Rabies, RabAvert)',
    id: '2bfeeb1f-b7a7-4ce6-aae1-72e840a93e2e',
    diseases: ['Rabies'],
  },
  {
    name: 'RV1 (Rotarix)',
    id: '8ddfa840-7558-469a-a53b-19a40d016518',
    diseases: ['Rotavirus'],
  },
  {
    name: 'RV5 (RotaTeq)',
    id: '9281ddcb-5ef3-47e6-a249-6b2b8bee1e7f',
    diseases: ['Rotavirus'],
  },
  {
    name: 'ZOS (Zostavax)',
    id: '2921b034-8a4c-46f5-9753-70a112dfec3f',
    diseases: ['Shingles (Herpes Zoster)'],
  },
  {
    name: 'Vaccinia (ACAM2000)',
    id: 'e26378f4-5d07-4b5f-9c93-53816c0faf9f',
    diseases: ['Smallpox'],
  },
  {
    name: 'DTaP (Daptacel, Infanrix)',
    id: 'b23e765e-a05b-4a24-8095-03d79e47a8aa',
    diseases: [
      'Tetanus (Lockjaw)',
      'Pertussis (Whooping Cough)',
      'Diphtheria',
    ],
  },
  {
    name: 'Td (Decavac, generic)',
    id: '1af45230-cb2a-4242-81ac-2430cd64f8ce',
    diseases: ['Tetanus (Lockjaw)', 'Diphtheria'],
  },
  {
    name: 'DT (-generic-)',
    id: '6eb77e28-aaa1-4e29-b124-5793a4bd6f1f',
    diseases: ['Tetanus (Lockjaw)', 'Diphtheria'],
  },
  {
    name: 'TT (-generic-)',
    id: 'd6cf7277-831c-43c6-a1fa-7109d3325168',
    diseases: ['Tetanus (Lockjaw)'],
  },
  {
    name: 'DTaP-IPV (Kinrix)',
    id: 'a8ecfef5-5f09-442c-84c3-4dfbcd99b3b8',
    diseases: [
      'Tetanus (Lockjaw)',
      'Polio',
      'Pertussis (Whooping Cough)',
      'Diphtheria',
    ],
  },
  {
    name: 'DTaP-HepB-IPV (Pediarix)',
    id: '10bc0626-7b0a-4a42-b1bf-2742f0435c37',
    diseases: [
      'Tetanus (Lockjaw)',
      'Polio',
      'Hepatitis B',
      'Pertussis (Whooping Cough)',
      'Diphtheria',
    ],
  },
  {
    name: 'DTaP-IPV/Hib (Pentacel)',
    id: 'dcbb9691-1544-44fc-a9ca-351946010876',
    diseases: [
      'Tetanus (Lockjaw)',
      'Polio',
      'Haemophilus influenzae type b (Hib)',
      'Pertussis (Whooping Cough)',
      'Diphtheria',
    ],
  },
  {
    name: 'DTaP/Hib',
    id: 'e817c55d-e3db-4963-9fec-04d5823f6915',
    diseases: [
      'Tetanus (Lockjaw)',
      'Diphtheria',
      'Haemophilus influenzae type b (Hib)',
      'Pertussis (Whooping Cough)',
    ],
  },
  {
    name: 'BCG (TICE BCG, Mycobax)',
    id: '8f2049a1-a1e3-44e1-947e-debbf3cafecc',
    diseases: ['Tuberculosis (TB)'],
  },
  {
    name: 'Typhoid Oral (Vivotif)',
    id: '060f44be-e1e7-4575-ba0f-62611f03384b',
    diseases: ['Typhoid Fever'],
  },
  {
    name: 'Typhoid Polysaccharide (Typhim Vi)',
    id: '87009829-1a48-4330-91e1-6bcd7ab04ee1',
    diseases: ['Typhoid Fever'],
  },
  {
    name: 'YF (YF-Vax)',
    id: '24d5bfc4-d69a-4311-bb10-8980dddafa20',
    diseases: ['Yellow Fever'],
  },
]);

const keyedVaccines = vaccines.reduce((result, item) => (
  result.set(item.get('id'), item)
), OrderedMap());

export default keyedVaccines.sortBy(vaccine => vaccine.get('name').toLowerCase());
