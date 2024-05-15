
/**
 * Bazaar plugin annotation.
 * @public
 */
export const ANNOTATION_BAZAAR_PROJECTS = 'backstage.io/bazaar-projects';

/**
 * Utility function to get the value of an entity Bazaar annotation.
 * @public
 */
const getBazaarAnnotation = (entity: Entity) =>
  entity.metadata.annotations?.[ANNOTATION_BAZAAR_PROJECTS]?.trim();

/**
 * Utility function to determine if the given entity has Bazaar projects.
 * @public
 */
export const isBazaarProjectAvailable = (entity: Entity) 
  Boolean(getBazaarAnnotation(entity));

export * from '@backstage/plugin-bazaar';
