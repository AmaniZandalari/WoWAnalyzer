import SPELLS from 'common/SPELLS';

export const MS_BUFFER_100 = 100;
export const MS_BUFFER_250 = 250;
export const MS_BUFFER_500 = 500;
export const MS_BUFFER_1000 = 1000;

export const FIRESTARTER_THRESHOLD = .90;
export const SEARING_TOUCH_THRESHOLD = .30;
export const COMBUSTION_END_BUFFER = 3000;
export const PHOENIX_FLAMES_MAX_CHARGES = 2;

export const WINTERS_PROTECTION_REDUCTION_SEC = [0, 25, 28, 30, 33, 35, 38, 40, 43, 45, 48, 50, 53, 55, 58, 60];
export const FLOW_OF_TIME_REDUCTION_SEC = [0, 2, 2.2, 2.4, 2.6, 2.8, 3, 3.2, 3.4, 3.6, 3.8, 4, 4.2, 4.4, 4.6, 4.8];

export const SHATTER_DEBUFFS = [
  SPELLS.WINTERS_CHILL,
  SPELLS.FROST_NOVA,
  SPELLS.ICE_NOVA_TALENT,
  SPELLS.GLACIAL_SPIKE_DAMAGE,
  SPELLS.RING_OF_FROST_DAMAGE,
  SPELLS.FREEZE,
];

export const FIRE_DIRECT_DAMAGE_SPELLS = [
  SPELLS.FIREBALL,
  SPELLS.PYROBLAST,
  SPELLS.FIRE_BLAST,
  SPELLS.SCORCH,
  SPELLS.PHOENIX_FLAMES,
];
