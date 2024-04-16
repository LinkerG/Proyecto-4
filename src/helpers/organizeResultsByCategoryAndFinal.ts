export function organizeResultsByCategoryAndFinal(results){
    return results.reduce((acc, result) => {
        if (!acc[result.category]) {
          acc[result.category] = { semi: [], final: [] };
        }
        const finalKey = result.isFinal ? 'final' : 'semi';
        acc[result.category][finalKey].push(result);
        return acc;
      }, {});
}