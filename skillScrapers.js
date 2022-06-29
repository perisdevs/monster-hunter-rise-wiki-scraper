export function scrapeContainerForName(container) {
    let name = container.textContent;
    return name;
}

export function scrapeContainerForDescription(container) {
    let description = container.textContent;
    return description;
}

export function scrapeContainerForLevel(container) {
    let level = container.textContent.split(/\s/)[0];
    return level;
}

export function scrapeContainerForProgression(container) {
    let levels = Array.from(container.querySelectorAll('li'));
    let descriptions = [];
    levels.forEach((level) => {
        descriptions.push(level.textContent);
    });
    return descriptions;
}