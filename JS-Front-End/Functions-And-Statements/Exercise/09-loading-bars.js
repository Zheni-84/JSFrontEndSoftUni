function solve(progress) {
    const renderProgressBar = (progress) => `[${'%'.repeat(progress / 10)}${'.'.repeat(10 - progress / 10)}]`;
    const renderProgress = progress => `${progress}% ${renderProgressBar(progress)}`;
    const isCompleated = progress === 100;

    console.log(renderProgress(progress));
    console.log(isCompleated ? 'Complete!' : 'Still loading...');
}

function solve2(number) {
    const progress = number / 10;
    const progressBar = '%'.repeat(progress);
    const dots = '.'.repeat(10 - progress);

    const message = progress < 10 ? `${number}% [${progressBar}${dots}]\nStill loading...` : `100% Complete!\n[${progressBar}]`;

    console.log(message);
}


solve2(30);
solve(100);