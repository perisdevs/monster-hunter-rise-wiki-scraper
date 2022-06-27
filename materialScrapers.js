export function scrapeContainerForName(container) {
    let name = container.textContent.trim();
    return name;
}

export function scrapeContainerForRarity(container) {
    let rarity = parseInt(container.textContent.split(/\s/)[1]);
    return rarity;
}

export function scrapeContainerForType(container) {
    let type = container.textContent;
    return type;
}

export function scrapeContainerForSources(container) {
    let sourceContainers = Array.from(container.querySelectorAll('li'));
    let sources = [];
    sourceContainers.forEach((source) => {
        sources.push(source.textContent);
    });
    return sources;
}