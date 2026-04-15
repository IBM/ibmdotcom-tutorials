type EnsureKeys<ExpectedKeys extends (keyof Target)[], Target> = keyof Target extends ExpectedKeys[number] ? unknown : `Missing required keys: ${Exclude<keyof Target, ExpectedKeys[number]> & string}`;
export declare const createSplitProps: <Target>() => <Keys extends (keyof Target)[], Props extends Target = Target>(props: Props, keys: Keys & EnsureKeys<Keys, Target>) => [Target, Omit<Props, Extract<(Keys & EnsureKeys<Keys, Target>)[number], string>>];
export {};
