const assert = require('assert');

function countBatteriesByHealth(presentCapacities) {
  const ratedCapacity = 120; // from the question
  const result = {
    healthy: 0,
    exchange: 0,
    failed: 0
  };

  for (const presentCapacity of presentCapacities) {
    const soh = (presentCapacity / ratedCapacity) * 100;

    // classify battries
    if (soh > 80) {
      result.healthy++
    } else if (soh >= 63 && soh <= 80) {
      result.exchange++
    } else {
      result.failed++;
    }
  }
  return result;
}

function testBucketingByHealth() {
  console.log('Counting batteries by SoH...');
  const presentCapacities = [113, 116, 80, 95, 92, 70];
  counts = countBatteriesByHealth(presentCapacities);
  // console.log(presentCapacities, "<<<<<presentCapacities")
  assert(counts["healthy"] == 2);
  assert(counts["exchange"] == 3);
  assert(counts["failed"] == 1);
  console.log("Done counting :)");
}

testBucketingByHealth();

