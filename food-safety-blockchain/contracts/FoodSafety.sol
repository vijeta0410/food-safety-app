// contracts/FoodSafety.sol
pragma solidity ^0.8.0;

contract FoodSafety {
    struct MeatBatch {
        uint256 id;
        string origin;
        string quality;
        uint256 timestamp;
        string motionData;
    }

    MeatBatch[] public batches;
    uint256 public nextId;

    event NewBatch(uint256 id, string origin, string quality, uint256 timestamp, string motionData);

    function addBatch(string memory origin, string memory quality, string memory motionData) public {
        batches.push(MeatBatch(nextId, origin, quality, block.timestamp, motionData));
        emit NewBatch(nextId, origin, quality, block.timestamp, motionData);
        nextId++;
    }

    function getBatch(uint256 id) public view returns (uint256, string memory, string memory, uint256, string memory) {
        MeatBatch memory batch = batches[id];
        return (batch.id, batch.origin, batch.quality, batch.timestamp, batch.motionData);
    }

    function getBatches() public view returns (MeatBatch[] memory) {
        return batches;
    }
}
