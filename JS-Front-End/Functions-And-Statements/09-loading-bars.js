function solve(progress) {
    const renderProgressBar = (progress) => `[${'%'.repeat(progress / 10)}${'.'.repeat(10 - progress / 10)}]`;
    const renderProgress = progress => `${progress}% ${renderProgressBar(progress)}`;
    const isCompleated = progress === 100;

    console.log(renderProgress(progress));
    console.log(isCompleated ? 'Completed!' : 'Still loading...');
}

solve(30);
solve(100);