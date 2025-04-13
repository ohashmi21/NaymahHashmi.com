export default class UuidUtilities {
  private static id = 0

  /**
   * Returns a value generating an ID to uniquely identify a component.
   *
   * This is a very simple implementation that is used client-side only, and should not be persisted at any point.k
   */
  static getId(): number {
    return UuidUtilities.id++
  }

  /** Wrapper call around {@link getId} that converts the number into a string */
  static getIdString(): string {
    return `${this.getId()}`
  }
}
