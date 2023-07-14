export interface IElementCreator {
  tag: string;
  className: string[];
  textContent?: string;
  callback?: (event?: Event | undefined) => void;
  attr?: Array<{ name: string; propery: string }>;
}
