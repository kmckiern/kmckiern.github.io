---
layout: post
title:  "Automating quantum computing"
date:   2019-08-25
categories: blog
---


New paper! Here I present a very abridged version, originally shared on [twitter](https://twitter.com/k_mckiern/status/1164960856532119557?s=20).

[Automated quantum programming via reinforcement learning for combinatorial optimization](https://arxiv.org/abs/1908.08054)

In this paper, we share our work on a new method for application-level programming of gate-based quantum computers.

To solve an optimization problem on a quantum computer, one needs to first define the problem of interest. For combinatorial optimization, the problem is defined with respect to a well known objective function. This objective function is then translated into a problem “hamiltonian”, which is typically a function of Pauli spin operators (see [here](https://arxiv.org/abs/1804.09130) to learn more). 

Traditionally, one would then call on a known near-term quantum algorithm, which provides a parametric template of quantum gates. These gate parameters are then variationally optimized with respect to the problem hamiltonian through iterative execution on a quantum resource (see [here](https://arxiv.org/abs/1411.4028), the quantum algorithm typically used for combinatorial optimization, to learn more). Reinforcement learning removes the need for a predefined ansatz. Instead, the learning agent is exposed only to the problem hamiltonian and a finite set of quantum gates. It is directly incentivized to sequentially construct quantum programs that minimize the problem hamiltonian.

![agent](/assets/io.png){:height="70%" width="70%" .center}

In this work, we first train a range of agents using a simulated quantum resource. Through this training process, the agents demonstrate the ability to generate programs yielding increasingly higher quality solutions (episode reward), using a shorter number of gates (episode length).

We then took the best agent, and continued training on a real quantum computer. This agent spent several days, around the clock, sending programs to and analyzing the response of the quantum processor. In total, around 3 million circuits were relayed between the agent and the QPU.

Following training, we tested the agents on both the simulated and real quantum resources. It was found that the agent was able to successfully generalize from the training data to the test data, as well as from the simulated quantum resource to the real quantum computer. As shown below, the test reward distribution is improved through training, and the expected episode score between the simulated (QVM) and real quantum computer (QPU) is relatively consistent. 

![test-rewards](/assets/test-rewards.png)

In order to investigate the impact of training directly on the QPU, we tested both the QVM-trained agent and the QPU-trained agent on the QPU. We see that although the reward metric is relatively unchanged (left distributions), the QPU-trained agent generated much shorter programs (right distributions). This is perhaps due to an indirect incentive present during QPU-training: device noise.

![qpu-training](/assets/qpu-training.png)

We performed cursory analysis of agent generated programs. We find that the agent favors “bit flip” type operations. We hypothesize that for the hamiltonians and reward structure studied here, this is optimal. Note that on the QPU, the programs are compiled to a particular native gate set. We find that on the QPU, the QPU-trained agent learns to disfavor non-native gates (such as RY rotations).

![action-stats](/assets/action-stats.png)

Last, we outline a range of interesting future directions. In particular, we remain curious about performance of this technique on problems with inherently quantum structure, such as quantum chemistry.

If you’re interested in learning more, all components of this work have been open sourced:

[code, datasets, models](https://github.com/rigetti/gym-forest)

Have fun!
